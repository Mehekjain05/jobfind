import React from 'react';

function Contact() {
  return (
    <>
      <div className='my-5'>
        <h1 className='text-center'>Contact Us</h1>
      </div>
      <div className='container contact'>
        <div className='row'>
          <div className='col-md-6 col-10 mx-auto'>
            <form>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Name</label>
                <input type="text" class="form-control"  aria-describedby="emailHelp" placeholder='Enter your Name' />
                <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
              </div>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Phone</label>
                <input type="email" class="form-control" aria-describedby="emailHelp"placeholder='Enter your Number' />
                <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
              </div>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Email address</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Enter your Email' />
                <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
              </div>
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Message</label>
                <textarea  class="form-control" id="exampleInputPassword1" ></textarea>
              </div>
              <button type="submit" class="btn btn-outline-primary">Submit Form</button>
            </form>


          </div>

        </div>
      </div>
    </>
  )
}

export default Contact;