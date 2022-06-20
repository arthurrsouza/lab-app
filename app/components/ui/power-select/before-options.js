// import PowerSelectBeforeOptionsComponent from 'ember-power-select/components/power-select/before-options'
import PowerSelectBeforeOptionsComponent from '@glimmer/component'
import { action } from '@ember/object'

export default class UiPowerSelectBeforeOptionsComponent extends PowerSelectBeforeOptionsComponent {
  get allSelected () {
    const { options, selected } = this.args.select
    return selected && selected.length === options.length
  }

  @action
  toggleAll () {
    const { options, selected } = this.args.select
    if (this.allSelected) {
      return this.args.select.actions.select(null)
    }

    this.args.select.actions.select(this.args.select.options)
  }
}
