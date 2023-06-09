import { useNavigate } from "react-router-dom"
import { FaTrash } from "react-icons/fa"
import { GET_PROJECTS } from "../queries/projectQueries"
import { useMutation } from "@apollo/client"
import { DELETE_PROJECT } from "../mutation/projectMutation"


export default function DeleteProjectButton({projectId}) {
    const naviagte = useNavigate();

    const [deleteProject] = useMutation(DELETE_PROJECT,{
        variables: {id: projectId},
        onCompleted: () => naviagte('/'),
        refetchQueries: [{query: GET_PROJECTS}],
        
    })


  return (
    <div className="d-flex mt-5 ms-auto">
        <button className="btn btn-danger m-2" onClick={deleteProject}>
         <FaTrash className="icon" /> Delete Project
        </button>
    </div>
  )
}
