'use strict'

const config = require('../config')
const store = require('../store.js')

// Lovely api codes which are related with their names but bec. of an last
// update Items means lists here.

// Shows the surveys.
const showItems = function () {
  return $.ajax({
    url: config.apiUrl + '/surveys',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

// Shows the surveys of signed-in user.
const showMyItems = function () {
  return $.ajax({
    url: config.apiUrl + '/surveys',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

// Creates new survey for signed-in user.
const createItem = function (data, options) {
  return $.ajax({
    url: config.apiUrl + '/surveys',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

// Deletes the created survey of signed-in user.
const deleteItem = function (id) {
  return $.ajax({
    url: config.apiUrl + '/surveys/' + id,
    method: 'delete',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

// Updates the created surveys of signed-in user.
const updateItem = function (id, data) {
  return $.ajax({
    url: config.apiUrl + '/surveys/' + id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

// votes for the created any survey
const vote = function (surveyId, radio) {
  return $.ajax({
    url: config.apiUrl + '/answers',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      'answer': {
        'choice': radio,
        'question': surveyId
      }
    }
  })
}

module.exports = {
  showItems,
  showMyItems,
  createItem,
  deleteItem,
  updateItem,
  vote
}
