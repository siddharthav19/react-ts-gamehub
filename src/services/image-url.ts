
//  ->  /media/crop/:w/:h
function getCroppedImageUrl(url:string):string{
     const target:string = 'media/';
     const index = url.indexOf(target)+target.length;
     return url.slice(0,index)+'crop/600/400/'+url.slice(index);
}

export default getCroppedImageUrl;