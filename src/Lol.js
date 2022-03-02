import React, { useEffect, useState } from 'react'

import { useParams } from 'react-router-dom'
import axios from 'axios'
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Lol = () => {
 

  const { id } = useParams();
  return (
    <div>Lol - {id}

      <Button type='button' class='btn btn-success'>
        <button type='submit'><Link to='/djdgasjd'>Submit</Link></button>
      </Button>
    </div>
  )
}

export default Lol