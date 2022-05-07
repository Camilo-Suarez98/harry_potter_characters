const House = ( { onClick, house } ) => {
  return (
    <>
      <button className="mx-4 px-2 bg-slate-500" type="submit" onClick={onClick}>{house}</button>
    </>
  )
}

export default House
