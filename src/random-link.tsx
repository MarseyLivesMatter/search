import * as React from 'react';

/** Renders a random link from a list. Very cool and funny */
export class RandomLink extends React.Component {
  static links = [
    ["Marsey's Homepage", "https://marsey.cat"],
    ["Marsey the Cat | Know Your Meme", "https://knowyourmeme.com/memes/marsey-the-cat"],
    ["Marsey's Twitter", "https://www.twitter.com/marseycat"],
  ];

  static entry = RandomLink.links[Math.floor(Math.random() * RandomLink.links.length)];

  render() {
    let entry = RandomLink.entry;
    let name = entry[0];
    let url;
    if (entry.length == 1) {
      url = entry[0];
    } else {
      url = entry[1];
    }

    if (url == "text") {
      return <>"{name}"</>
    }
    return <a className="text-blue-400 hover:text-blue-600" href={url}>{name}</a>
  }
}
