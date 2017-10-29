export default{
  fetchMovies(cb){
    return firebase.database().ref('/movies').once('value');
  },
  fetchMovieTimes(){
    return firebase.database().ref('/movieTimes').once('value');
  },
  fetchMovieDetails(){
    return firebase.database().ref('/movies').once('value');
  }
}
