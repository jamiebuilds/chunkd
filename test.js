// @flow
'use strict';
const test = require('ava');
const chunkd = require('./');

test('chunkd', t => {
  t.deepEqual(chunkd([1, 2, 3], 0, 1), [1, 2, 3]);

  t.deepEqual(chunkd([], 0, 3), []);
  t.deepEqual(chunkd([], 1, 3), []);
  t.deepEqual(chunkd([], 2, 3), []);

  t.deepEqual(chunkd([1], 0, 3), [1]);
  t.deepEqual(chunkd([1], 1, 3), []);
  t.deepEqual(chunkd([1], 2, 3), []);

  t.deepEqual(chunkd([1, 2], 0, 3), [1]);
  t.deepEqual(chunkd([1, 2], 1, 3), [2]);
  t.deepEqual(chunkd([1, 2], 2, 3), []);

  t.deepEqual(chunkd([1, 2, 3], 0, 3), [1]);
  t.deepEqual(chunkd([1, 2, 3], 1, 3), [2]);
  t.deepEqual(chunkd([1, 2, 3], 2, 3), [3]);

  t.deepEqual(chunkd([1, 2, 3, 4], 0, 3), [1, 2]);
  t.deepEqual(chunkd([1, 2, 3, 4], 1, 3), [3]);
  t.deepEqual(chunkd([1, 2, 3, 4], 2, 3), [4]);

  t.deepEqual(chunkd([1, 2, 3, 4, 5], 0, 3), [1, 2]);
  t.deepEqual(chunkd([1, 2, 3, 4, 5], 1, 3), [3, 4]);
  t.deepEqual(chunkd([1, 2, 3, 4, 5], 2, 3), [5]);

  t.deepEqual(chunkd([1, 2, 3, 4, 5, 6], 0, 3), [1, 2]);
  t.deepEqual(chunkd([1, 2, 3, 4, 5, 6], 1, 3), [3, 4]);
  t.deepEqual(chunkd([1, 2, 3, 4, 5, 6], 2, 3), [5, 6]);
});
