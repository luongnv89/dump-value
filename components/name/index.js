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
}

/**
 * Get random name by gender and region
 * @param {Array} genders list of genders
 * @param {Array} regions List of regions
 */
const getRandomName = (xgenders=['male','female'], xregions=['africa','america','asia','europe','oceania']) => {
  let totalNames = [];
  let genders = xgenders;
  if (genders.length == 0) {
    genders = ['male','female'];
  }

  let regions = xregions;
  if (regions.length == 0) {
    regions = ['africa','america','asia','europe','oceania'];
  }

  genders.forEach(gen => {
    regions.forEach(reg => {
      if (allNames[gen][reg]){
        totalNames = totalNames.concat(allNames[gen][reg]);
      }
    });
  });
  const randomIndex = Math.floor(Math.random() * Math.floor(totalNames.length - 1));
  return totalNames[randomIndex];
};

module.exports = {
  getRandomName,
};
