'use strict';

const request = require('supertest');
const mm = require('egg-mock');

describe('test/hatch-errors.test.js', () => {
  let app;
  before(() => {
    app = mm.app({
      baseDir: 'apps/hatch-errors-test',
    });
    return app.ready();
  });

  after(() => app.close());
  afterEach(mm.restore);

  it('should GET /', () => {
    return request(app.callback())
      .get('/')
      .expect('hi, hatchErrors')
      .expect(200);
  });
});
