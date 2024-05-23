import Cryptr from "cryptr";

const getCryptrConfigurations = (salt) => {
  return new Cryptr(salt, {
    saltLength: 1,
  });
};

export default getCryptrConfigurations;