import { getPodcasts } from './api';

const podCastContainer = document.querySelector('.section__podlist-pods');

let i = 0;

export async function createHtml() {
  const podCasts = await getPodcasts();
  podCasts.programs.forEach(podcast => {
    i++;
    const innerArticle = createInnerArticle();

    createImg();

    const textDiv = createTextDiv();

    createHeader();
    createP();
    createLink();

    function createInnerArticle() {
      const innerArticle = document.createElement('article');
      innerArticle.setAttribute('class', 'section__article-innerarticle');
      innerArticle.setAttribute('tabindex', '1');
      podCastContainer.appendChild(innerArticle);
      return innerArticle;
    }

    function createTextDiv() {
      const textDiv = document.createElement('div');
      textDiv.setAttribute('class', 'section__article-text-container');
      innerArticle.appendChild(textDiv);
      return textDiv;
    }

    function createLink() {
      const linkPlacement = document.createElement('a');
      const linkText = document.createTextNode('Lyssna här');
      linkPlacement.setAttribute('href', podcast.programurl);
      linkPlacement.setAttribute('class', 'section__article-link');
      linkPlacement.setAttribute('tabindex', '1');
      linkPlacement.appendChild(linkText);
      textDiv.appendChild(linkPlacement);
    }

    function createImg() {
      const imgPlacement = document.createElement('IMG');
      imgPlacement.setAttribute('src', podcast.socialimage);
      imgPlacement.setAttribute('class', 'section__article-img');
      imgPlacement.setAttribute('width', '100');
      imgPlacement.setAttribute('height', '100');
      innerArticle.appendChild(imgPlacement);
    }

    function createP() {
      const descPlacement = document.createElement('p');
      descPlacement.setAttribute('class', 'section__article-description');
      const desc = document.createTextNode(podcast.description);
      descPlacement.appendChild(desc);
      textDiv.appendChild(descPlacement);
    }

    function createHeader() {
      const headerPlacement = document.createElement('h2');
      headerPlacement.setAttribute('class', 'section__article-title');
      const programName = document.createTextNode(podcast.name);
      headerPlacement.appendChild(programName);
      textDiv.appendChild(headerPlacement);
    }
  });
}

export default createHtml;
