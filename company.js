const { faker } = require('@faker-js/faker');

const createCompany = () => {
  const address = {
    street: faker.address.streetAddress(),
    city: faker.address.city(),
    state: faker.address.state(),
    zipCode: faker.address.zipCode(),
    country: faker.address.country()
  };

  return {
    _id: faker.datatype.uuid(),
    name: faker.company.name(),
    address: address
  };
};

module.exports = createCompany;
