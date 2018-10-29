/* jshint esversion: 6 */
const africaFemale = require('./africa-female');
const africaMale = require('./africa-male');

const americaFemale = require('./america-female');
const americaMale = require('./america-male');

const asiaFemale = require('./asia-female');
const asiaMale = require('./asia-male');

const europeFemale = require('./europe-female');
const europeMale = require('./europe-male');

const oceaniaFemale = require('./oceania-female');
const oceaniaMale = require('./oceania-male');

const allNames = {
  'male': {
    'africa': africaMale,
    'america': americaMale,
    'europe': europeMale,
    'asia': asiaMale,
    'oceania': oceaniaMale,
  },
  'female': {
    'africa': africaFemale,
    'america': americaFemale,
    'europe': europeFemale,
    'asia': asiaFemale,
    'oceania': oceaniaFemale,
  }
};


const listGenders = ['male', 'female'];
const listRegions = ['africa', 'america', 'asia', 'europe', 'oceania'];
/**
 * Get random name by gender and region
 * @param {String} xgender gender of name
 * @param {String or Array of String} xregions The region
 */
const getRandomName = (xregions=['africa','america','asia','europe','oceania'], xgender = 'all') => {
  let totalNames = [];
  let genders = [];
  if (xgender && xgender !== 'all') {
    if (listGenders.indexOf(xgender) === -1 ) {
      console.error('[ERROR] invalid gender: ', xgender);
      return undefined;
    }
    genders = [xgender];
  } else {
    genders = listGenders;
  }

  let regions = [];
  if (typeof xregions === 'string') {
    regions = [xregions];
  } else {
    regions = xregions.length === 0 ? listRegions : xregions;
  }

  for (let index = 0; index < regions.length; index++) {
    const reg = regions[index];
    if (listRegions.indexOf(reg) === -1) {
      console.error('[ERROR] invalid region: ', reg);
      return undefined;
    }
  }

  genders.forEach(gen => {
    regions.forEach(reg => {
      totalNames = totalNames.concat(allNames[gen][reg]);
    });
  });
  const randomIndex = Math.floor(Math.random() * Math.floor(totalNames.length - 1));
  return totalNames[randomIndex];
};

module.exports = {
  getRandomName,
};
