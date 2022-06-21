import Controller from '@ember/controller'
import { tracked } from '@glimmer/tracking'

export default class ApplicationController extends Controller {
  @tracked selectedOptions
  @tracked people = [
    { id: 1, name: 'Arthur' },
    { id: 2, name: 'Sebastian' },
    { id: 3, name: 'Patrick' },
    { id: 4, name: 'Celia' }
  ]
}
