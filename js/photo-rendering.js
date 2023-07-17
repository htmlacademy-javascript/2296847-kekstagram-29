const smallPhotoTemplate = document.querySelector('#picture').content.querySelector('.picture');
const smallPhotoList = document.querySelector('.pictures');

const renderSmallPhoto = ({url, description, likes, comments}) => {
  const smallPhoto = smallPhotoTemplate.cloneNode(true);
  smallPhoto.querySelector('.picture__img').src = url;
  smallPhoto.querySelector('.picture__img').alt = description;
  smallPhoto.querySelector('.picture__likes').textContent = String(likes);
  smallPhoto.querySelector('.picture__comments').textContent = String(comments.length);

  return smallPhoto;
};

const renderSmallPhotos = (photos) => {
  const smallPhotoFragment = document.createDocumentFragment();
  photos.forEach((photo) => {
    const smallPhoto = renderSmallPhoto(photo);
    smallPhotoFragment.append(smallPhoto);
  });

  smallPhotoList.append(smallPhotoFragment);
};

export {renderSmallPhotos};
