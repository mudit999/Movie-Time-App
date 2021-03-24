import './App.css';
import Row from './component/Row/Row';
import request from './request';
import Banner from './component/Banner/Banner';
import Nav from './component/Nav/Nav.js';

function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <Row title ='Netflix originals' fetchURL = {request.fetchNetflixOriginals} isLargeRow/>  
      <Row title ='Trending Now' fetchURL = {request.fetchTrending} />
      <Row title ='Top Rated' fetchURL = {request.fetchTopRated}/>
      <Row title ='Action Movies' fetchURL = {request.fetchActionMovies}/>    
      <Row title ='Comedy Movies' fetchURL = {request.fetchComedyMovies}/>    
      <Row title ='Horror Movies' fetchURL = {request.fetchHorrorMovies}/>    
      <Row title ='Romance Movies' fetchURL = {request.fetchRomanceMovies}/>    
      <Row title ='Documentaries' fetchURL = {request.fetchDocumentariesMovies}/>    
    </div>
  );
}

export default App;
