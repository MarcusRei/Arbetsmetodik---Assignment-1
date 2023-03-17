import { getPodcasts } from './api';

const podCastContainer = document.querySelector('.section__podlist-pods');

let i = 0;

function createInnerArticle() {
  const innerArticle = document.createElement('article');
  innerArticle.setAttribute('class', 'section__article-innerarticle');
  innerArticle.setAttribute('tabindex', '1');
  podCastContainer.appendChild(innerArticle);
  return innerArticle;
}

function createTextDiv(innerArticle) {
  const textDiv = document.createElement('div');
  textDiv.setAttribute('class', 'section__article-text-container');
  innerArticle.appendChild(textDiv);
  return textDiv;
}

function createImg(podcast, innerArticle) {
  const imgPlacement = document.createElement('IMG');
  imgPlacement.setAttribute('src', podcast.socialimage);
  imgPlacement.setAttribute('class', 'section__article-img');
  imgPlacement.setAttribute('width', '100');
  imgPlacement.setAttribute('height', '100');
  imgPlacement.setAttribute('alt', podcast.name);
  innerArticle.appendChild(imgPlacement);
}

function createHeader(podcast, textDiv) {
  const headerPlacement = document.createElement('h2');
  headerPlacement.setAttribute('class', 'section__article-title');
  const programName = document.createTextNode(podcast.name);
  headerPlacement.appendChild(programName);
  textDiv.appendChild(headerPlacement);
}

function createP(podcast, textDiv) {
  const descPlacement = document.createElement('p');
  descPlacement.setAttribute('class', 'section__article-description');
  const desc = document.createTextNode(podcast.description);
  descPlacement.appendChild(desc);
  textDiv.appendChild(descPlacement);
}

function createLink(podcast, textDiv) {
  const linkPlacement = document.createElement('a');
  const linkText = document.createTextNode('Lyssna här');
  linkPlacement.setAttribute('href', podcast.programurl);
  linkPlacement.setAttribute('class', 'section__article-link');
  linkPlacement.setAttribute('tabindex', '1');
  linkPlacement.appendChild(linkText);
  textDiv.appendChild(linkPlacement);
}

export async function createHtml() {
  const podCasts = await getPodcasts();
  podCasts.programs.forEach(podcast => {
    const innerArticle = createInnerArticle();

    createImg(podcast, innerArticle);

    const textDiv = createTextDiv(innerArticle);

    createHeader(podcast, textDiv);
    createP(podcast, textDiv);
    createLink(podcast, textDiv);
  });
}

export default createHtml;
