import React from 'react'

 const Avatar = ({image}) => {
  return (
    <section className='avatar-detail'>
    <div className='avatar-box'>
        <img class="avatar-profile-image" src={image.img} alt=""/>
    </div>
    <p className='avatar-name'>{image.name}</p>
    </section>
  )
}
export default Avatar;