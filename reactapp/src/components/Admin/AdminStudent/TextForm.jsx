import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import StarRateIcon from '@mui/icons-material/StarRate';
import AddCircleOutlineTwoToneIcon from '@mui/icons-material/AddCircleOutlineTwoTone';
export default function Textform() {
  return (

    <>
      <div className="search-bar">
        <label><input type="search" id="search" placeholder='Type here to search Academy' size="40" /></label>
        <label> <button className="btn btn-success" type="submit" id="#searchButton" value="Search">Search</button></label>
      </div><br /><br /><br /><br />
      <div className="container">
        <div className="row">

          <div div className="col-md-3">
            <div className="card">
              <img className="card-img-top" src="https://images.pexels.com/photos/159775/library-la-trobe-study-students-159775.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Card  cap" />
              <div className="card-body">
                <h5 className="card-title">Academy 1<span className="mx-3"><StarRateIcon /><StarRateIcon /><StarRateIcon /><StarRateIcon /></span></h5>
                <p className="card-text">Place: HYDERABAD</p>
                <a href="/" className="btn btn-secondary btn-sm"><EditIcon /></a>
                <a href="/" className="btn btn-danger btn-sm mx-1"><DeleteIcon /></a>
              </div>
            </div>
          </div>

          <div className="col-md-3 mx-5">
            <div className="card">
              <img className="card-img-top" src="https://images.pexels.com/photos/159775/library-la-trobe-study-students-159775.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Card  cap" />
              <div className="card-body">
                <h5 className="card-title">Academy 2<span className="mx-3"><StarRateIcon /><StarRateIcon /><StarRateIcon /><StarRateIcon /><StarRateIcon /></span></h5>
                <p className="card-text">Place: DELHI</p>
                <a href="/" className="btn btn-secondary btn-sm "><EditIcon /></a>
                <a href="/" className="btn btn-danger btn-sm mx-1"><DeleteIcon /></a>
              </div>
            </div>
          </div>

          <div className="col-md-3 mx-5">
            <div className="card">
              <img className="card-img-top" src="https://images.pexels.com/photos/159775/library-la-trobe-study-students-159775.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Card  cap" />
              <div className="card-body">
                <h5 className="card-title">Academy 3<span className='mx-3'><StarRateIcon /><StarRateIcon /><StarRateIcon /></span></h5>
                <p className="card-text">Place:KOLKATA</p>
                <a href="/" className="btn btn-secondary btn-sm"><EditIcon /></a>
                <a href="/" className="btn btn-danger btn-sm mx-1"><DeleteIcon /></a>
              </div>
            </div>
          </div>
        </div>

      </div><div className="addbtn">
        <button className="btn btn-light btn-lg" id="addAcademybtn"> <AddCircleOutlineTwoToneIcon /> Add Academy</button>
      </div>
    </>
  )
}
