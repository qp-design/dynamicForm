import crypto from "crypto";

function md5(content: string) {
  let md5 = crypto.createHash("md5");
  return md5.update(content).digest("hex");
}

function sha1(content: string) {
  let sha1 = crypto.createHash("sha1");
  return sha1.update(content).digest("hex");
}

function encryptPassword(param: string) {
  const calPassword = md5(param).slice(0, -2);
  return sha1(calPassword);
}

export default encryptPassword;
