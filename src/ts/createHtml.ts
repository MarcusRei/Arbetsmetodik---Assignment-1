import { getPodcasts } from './api';
import { log } from './devMode';

const podCastContainer = document.querySelector('.section__podlist-pods') as HTMLDivElement;

function createInnerArticle() {
  const innerArticle = document.createElement('article');
  innerArticle.setAttribute('class', 'section__article-innerarticle');
  innerArticle.setAttribute('tabindex', '1');
  podCastContainer.appendChild(innerArticle);
  return innerArticle;
}

function createTextContainer(innerArticle) {
  const textContainer = document.createElement('div');
  textContainer.setAttribute('class', 'section__article-text-container');
  innerArticle.appendChild(textContainer);
  return textContainer;
}

function createImg(podcast, innerArticle) {
  const imgPlacement = document.createElement('IMG');
  imgPlacement.setAttribute('src', podcast.socialimage);
  imgPlacement.setAttribute('class', 'section__article-img');
  imgPlacement.setAttribute('width', '100');
  imgPlacement.setAttribute('height', '100');
  imgPlacement.setAttribute('alt', `Omslagsbild för podcasten ${podcast.name}`);
  innerArticle.appendChild(imgPlacement);
}

function createHeader(podcast, textDiv) {
  const headerPlacement = document.createElement('h2');
  headerPlacement.setAttribute('class', 'section__article-title');
  const programName = document.createTextNode(podcast.name);
  headerPlacement.appendChild(programName);
  textDiv.appendChild(headerPlacement);
}

function createDescription(podcast, textDiv) {
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
  linkPlacement.appendChild(linkText);
  textDiv.appendChild(linkPlacement);
}

export async function createHtml() {
  const podCasts = await getPodcasts();

  podCasts.programs.forEach(podcast => {
    const innerArticle = createInnerArticle();

    createImg(podcast, innerArticle);

    const textDiv = createTextContainer(innerArticle);

    createHeader(podcast, textDiv);
    createDescription(podcast, textDiv);
    createLink(podcast, textDiv);
  });
}

export default createHtml;
