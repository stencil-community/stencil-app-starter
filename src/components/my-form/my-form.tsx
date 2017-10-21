import { Component, State, Event, EventEmitter } from '@stencil/core';
@Component({
    tag: 'my-form'
})
export class MyName {

    @State() value: string = '';
    @Event() myFormChangeEvent: EventEmitter;
    @Event() myFormSubmitEvent: EventEmitter;

    handleSubmit(e) {
        e.preventDefault()
        console.log('emitting');
        this.myFormChangeEvent.emit(this.value);
        this.value = '';
    }

    handleChange(event) {
        console.log('emitting');
        this.value = event.target.value;
        this.myFormSubmitEvent.emit(this.value);
    }

    render() {
        return (
            <form onSubmit={(e) => this.handleSubmit(e)}>
                <label>
                    Input:
                    <input type="text" value={this.value} onInput={() => this.handleChange(event)} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}