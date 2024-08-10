const layout = ()=>{
  const {children} = props;
  return(
    <div
    style={{
      padding: "0 4em",
      marging:"auto",
    }}>
    {
      children
    }
    </div>

  )
}


export default layout;
