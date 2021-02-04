
export const addBlog=(title,description)=>{

    return {type:'ADDBLOG',data:{title:title,description:description}}
}
export const deleteBlog=(val)=>{
    return {type:'DELETEBLOG', data:val}
}
