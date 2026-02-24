import { DeviceManager } from './advanced.js';

const logEl = document.getElementById('appLog');
const listEl = document.getElementById('deviceList');
const detailsEl = document.getElementById('details');
const form = document.getElementById('deviceForm');
const addBtn = document.getElementById('addBtn');
const clearBtn = document.getElementById('clearBtn');
const nameInput = document.getElementById('deviceName');
const latInput = document.getElementById('deviceLat');
const lngInput = document.getElementById('deviceLng');
const emailInput = document.getElementById('userEmail');
const passInput = document.getElementById('userPassword');

const dm = new DeviceManager();

function log(...args){
  const line = args.map(a=> typeof a === 'object'? JSON.stringify(a): String(a)).join(' ');
  logEl.textContent = line + '\n' + logEl.textContent;
}

// listen to manager custom events
dm.addEventListener('deviceAdded', e=>{
  const d = e.detail;
  log('deviceAdded', d.toJSON());
  renderList();
});

dm.addEventListener('deviceRemoved', e=>{
  log('deviceRemoved', e.detail);
  renderList();
});

// event delegation: handle clicks on list items
listEl.addEventListener('click', (ev)=>{
  const li = ev.target.closest('li');
  if(!li) return;
  const id = li.dataset.id;
  if(ev.target.matches('.remove')){
    dm.removeDevice(id);
    return;
  }
  const selected = dm.getDevice(id);
  if(selected){
    // dispatch a custom selection event from document
    document.dispatchEvent(new CustomEvent('deviceSelected',{detail:selected}));
  }
});

// global handler for selection
document.addEventListener('deviceSelected', (e)=>{
  const d = e.detail;
  detailsEl.textContent = `ID: ${d.id}\nName: ${d.name}\nCoords: ${d.lat}, ${d.lng}\nAdded: ${d.createdAt}`;
  log('deviceSelected', d.id);
});

function renderList(){
  const items = dm.list();
  if(items.length===0){
    listEl.innerHTML = '<li class="empty">No devices yet</li>';
    return;
  }
  listEl.innerHTML = items.map(d=>`<li data-id="${d.id}"><div><strong>${d.name}</strong><div class="meta">${d.toSummary()}</div></div><div><button class="remove">Remove</button></div></li>`).join('');
}

// Validation helpers
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
function validateEmailLocalPart(email){
  if(!email) return false;
  if(!emailRegex.test(email)) return false;
  const local = email.split('@')[0] || '';
  return local.length > 3;
}
function validateSixDigitPass(p){
  return /^\d{6}$/.test(p);
}

// handle form submit
form.addEventListener('submit', (ev)=>{
  ev.preventDefault();
  doAdd();
});

addBtn.addEventListener('click', (ev)=>{
  ev.preventDefault();
  doAdd();
});

clearBtn.addEventListener('click', ()=>{
  form.reset();
});

function doAdd(){
  const name = nameInput.value.trim();
  const lat = latInput.value.trim();
  const lng = lngInput.value.trim();
  const email = emailInput.value.trim();
  const pass = passInput.value.trim();

  const errors = [];
  if(!name) errors.push('Device name required');
  if(!lat || !lng) errors.push('Latitude and longitude required');
  if(!validateEmailLocalPart(email)) errors.push('Email invalid or local-part too short (>3 chars)');
  if(!validateSixDigitPass(pass)) errors.push('Password must be exactly 6 digits');

  if(errors.length){
    alert(errors.join('\n'));
    log('validationFailed',errors);
    return;
  }

  dm.addDevice(name, lat, lng);
  form.reset();
}

// initial render
renderList();
log('app initialized');
