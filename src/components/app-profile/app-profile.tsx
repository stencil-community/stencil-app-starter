import { Component, Prop } from '@stencil/core';
import { MatchResults } from '@stencil/router';


@Component({
  tag: 'app-profile',
  styleUrl: 'app-profile.css'
})
export class AppProfile {
  
  @Prop() match: MatchResults;

  render() {
    if (this.match && this.match.params.name) {
      return (
        <div class='app-profile'>
          <p>
            Hello! My name is {this.match.params.name}.
            My name was passed in through a route param!
          </p>
        </div>
      );
    }
  }
}
