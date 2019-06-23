import React, { Component } from "react";
import "./about.scss";
class about extends Component {
  state = {};
  render() {
    return (
      <div className="about">
        <blockquote>
          <p>"I am vengeance, I am the night, I am Batman!"</p>
          <footer>— Batman</footer>
        </blockquote>
        Batman has been Gotham's protector for decades, CEO of Wayne
        Enterprises, Patriarch of the Bat Family and veteran member of the
        Justice League. Batman is a superhero co-created by artist Bob Kane and
        writer Bill Finger and published by DC Comics. The character made his
        first appearance in Detective Comics #27 (May, 1939). Batman is the
        secret identity of Bruce Wayne. Witnessing the murder of his parents as
        a child leads him to train himself to physical and intellectual
        perfection and don a bat-themed costume in order to fight crime. Batman
        operates in Gotham City, assisted by various supporting characters
        including his sidekick Robin and his butler Alfred Pennyworth, and
        fights an assortment of villains influenced by the characters' roots in
        film and pulp magazines. Unlike most superheroes, he does not possess
        any superpowers; he makes use (to the best that he can) of intellect,
        detective skills, science and technology, wealth, physical prowess, and
        intimidation in his war on crime.
      </div>
    );
  }
}

export default about;
