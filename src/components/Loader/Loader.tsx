import "./Loader.css"

function Loader() {
    return (
        <div className='animation-wrapper'>
      <svg className="spinner" viewBox="0 0 50 50">
        <circle className="path" cx="25" cy="25" r="20" fill="none" stroke-width="2.5"></circle>

      </svg>
      <svg className="x" viewBox="0 0 50 50">
        <line className='line'
          x1="5" y1="45" x2="45" y2="5" stroke="black" strokeWidth="2.5" />
        <line className='line-reversed'
          x1="5" y1="5" x2="45" y2="45" stroke="black" strokeWidth="2.5" />
      </svg>
      <h1 className='loading-text left'>tic</h1>
      <h1 className='loading-text centre'>tac</h1>
      <h1 className='loading-text right'>toe</h1>
    </div>
    )
};

export default Loader