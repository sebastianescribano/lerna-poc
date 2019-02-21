
const first = require('@seekda/first');

const second = function () {
    console.log('Inside second: ', first());
    console.log('Second');
};

export default second;
