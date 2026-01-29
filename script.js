
const CommChange = document.querySelector('#comm-change')

const button = document.querySelector('button');

const fixes = ['MHZ', 'SQS', 'GLH', 'MLU', 'HEZ', 'MCB', 'IGB'];

const destinations = {
  SQS: ['UJM', 'HLI', 'GLH', 'IGB', 'KJAN'],
  MHZ: ['IGB', 'MEI', 'KMLU', 'MLU', 'HEZ', 'MCB', 'GCV', 'KGWO', 'GLH'],
  GLH: ['KGWO', 'KJAN'],
  MLU: ['KJAN'],
  HEZ: ['KJAN'],
  MCB: ['KJAN'],
  IGB: ['KGWO']
};

const routes = {
  'MHZ-IGB': ['V245'],
  'MHZ-MEI': ['V18', 'V417'],
  'MHZ-KMLU': ['V427', 'V18', 'V417'],
  'MHZ-MLU': ['V427', 'V18', 'V417'],

  'MHZ-HEZ': ['V245'],
  'MHZ-MCB': ['V557', 'V9', 'V555'],
  'MHZ-GCV': ['V11'],

  'MHZ-KGWO': ['V557', 'V9', 'V11', 'V555'],
  'MHZ-GLH': ['V74'],

  'SQS-UJM': ['V9'],
  'SQS-HLI': ['V535', 'V11'],
  'SQS-GLH': ['V278'],
  'SQS-IGB': ['V278'],
  'SQS-KJAN': ['V557', 'V9', 'V11', 'V555'],

  'GLH-KJAN': ['V74'],
  'GLH-KGWO': ['V278'],

  'MLU-KJAN': ['V427', 'V18', 'V417'],
  'HEZ-KJAN': ['V245'],
  'MCB-KJAN': ['V557', 'V9', 'V555'],
  'IGB-KGWO': ['V278']
};

function randomChoice(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

window.addEventListener('load', async () => {
    console.log('PAGE IS LOADED')
    console.log('===================')
    let newCommChange = loadRandomCommChange();
    CommChange.textContent = newCommChange;
})

button.addEventListener('click', () => {
    let newCommChange = loadRandomCommChange();
    CommChange.textContent = newCommChange;
});

function loadRandomCommChange() {

    let fix = randomChoice(fixes);
    let destination = randomChoice(destinations[fix]);

    let route = randomChoice(routes[`${fix}-${destination}`]);

    console.log(`Airplane traveling from ${fix} to ${destination} via ${route}`)

    let change = `Airplane traveling from ${fix} to ${destination} via ${route}`;

    return change;

}