import TestAgent from "supertest/lib/agent";
import Test from "supertest/lib/test";

/**
 * @Update 2022 - This has logic has been update to support newer Node.js versions
 * that don't have NodeJS as a global type
 */
declare global {
  //eslint-disable-next-line no-var
  var testRequest: TestAgent<Test>;
}

export {};
