import './index.css'

const Projects = props => {
  const {eachProjectDetails,onDelete} = props

  const {projectName, projectLink, projectDescription,id,githubLink} = eachProjectDetails
  console.log(eachProjectDetails)

 const onclickDelete =()=> {
    onDelete(id)
 }

  return (
    <>
    <li className="list-style">
      <div>
        <h1>{projectName}</h1>
        <p>{projectDescription}</p>
        <div className='buttons-conatianer'>
        <a href={projectLink} target="_new">
          <button type="button" className='deployLink'>Live deployed link</button>{' '}
        </a>
        <a href={githubLink} target="_new">
          <button type="button" className='deployLink'>GitHub link</button>{' '}
        </a>
        <button type= "button" className='deleteButton' onClick = {onclickDelete}>Delete Project</button>
        </div>
        
        
      </div>
     
     
    </li>
     <hr/>
     </>
  )
}

export default Projects