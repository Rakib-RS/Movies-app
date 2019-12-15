'use strict';
const Movie = require('../models/movie-model')
const createMovie =(req,res)=>{
    const body = req.body;
    if(!body){
        return res.json({
            success:false,
            error:'invalid input'
        })
    }
    const movie = new Movie(body);
    if(!movie){
        res.json({success:false});
    }
    movie.save()
        .then(() =>{
            return res.json({
                success:true,
                data: body
            })
        })
        .catch(error =>{
            return res.json({
                error,
                message:'movie not created',
            })
        })

};
const updateMovie = (req,res) =>{
    const body = req.body;
    if(!body){
        return res.json({
            success:false,
            error:'you must provide a body to update',
        })

    }
    Movie.findOneAndUpdate({_id: req.params.id},body,{new:true},(err,movie)=>{
        if(err){
            return res.json({
                success:false,
            })
        }
        return res.json({
            success:true,
            movie: movie,
        })
    })
}
const getMovieById = (req,res) =>{
    Movie.findOne({_id: req.params.id},(err,movie) =>{
        if(err){
            return res.json({
                success:false,
                error:err
            })
        }
        if(!movie){
           return res.json({
               success:false,
               error: 'movie not found'
           })
        }
        return res.json({
            success:true,
            data: movie,
        })
    })
}
const deleteMovie = (req,res) =>{
    Movie.findOneAndDelete({_id: req.params.id},(err,movie) =>{
        if(err){
            return res.json({success:false,error:err});
        }
        if(!movie){
            return res.json({
                success:false,
                error: 'movie not found'
            })
        }
        return res.json({success: true,data: movie});
    })
}
const getMovies = (req,res)=>{
    Movie.find({},(err,movies)=>{
        console.log(movies);
        if(err)
        return res.json({
            success:false
        })
        return res.json({
            success:true,
            data: movies
        })
        
    })
    
}
module.exports = {
    createMovie,
    updateMovie,
    getMovieById,
    deleteMovie,
    getMovies,
}