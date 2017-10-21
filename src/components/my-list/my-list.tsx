import { Component, State, Listen } from '@stencil/core';


@Component({
  tag: 'my-list'
})
export class MyName {

    @State() input : string;
    @State() table : Array<String> = [];

    @Listen('myFormChangeEvent')
    myFormChangeEventHandler(event: CustomEvent) {
      console.log('Received the custom myFormChangeEventHandler event: ', event.detail);
      this.table = [event.detail, ...this.table];
    }

    @Listen('myFormSubmitEvent')
    myFormSubmitEventHandler(event: CustomEvent) {
      console.log('Received the custom myFormSubmitEventHandler event: ', event.detail);
      console.log(event);
      this.input = event.detail;
    }

    render() {
        return (
            <ul>
                <slot/>
                {this.table.map((row) =>
                <li>{row}</li>
                )}
                {this.input}
            </ul>
        );
    }
}
