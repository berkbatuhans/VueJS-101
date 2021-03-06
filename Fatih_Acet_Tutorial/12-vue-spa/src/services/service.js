export default{
  fetchMovies(){
    return firebase.database().ref('/movies').once('value');
  },
  fetchMovieTimes(){
    return firebase.database().ref('/movieTimes').once('value');
  },
  fetchMovieDetails(id){
    return firebase.database().ref(`/movieDetails/${id}`).once('value');
  },
  fetchHalls(){
    return firebase.database().ref('/halls').once('value');
  },
  fetchTicketPrices(){
    return firebase.database().ref('ticketPrices').once('value');
  }
}
