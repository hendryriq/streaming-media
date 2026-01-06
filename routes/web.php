<?php

use App\Http\Controllers\Auth\AuthenticatedSessionController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::redirect('/', '/prototype/login'); 

Route::get('/dashboard', function () {
    return Inertia::render('Prototype/Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::prefix('prototype')->name('prototype.')->group(function () {
    Route::get('/login', function () {
        return Inertia::render('Prototype/Login');
    })->name('login');
    Route::get('/register', function () {
        return Inertia::render('Prototype/Register');
    })->name('register');
    
    Route::get('/subscriptionPlan', function () {
        return Inertia::render('Prototype/SubscriptionPlan');
    })->name('subscriptionPlan');

    Route::get('/movie/{slug}', function () {
        return Inertia::render('Prototype/Movie/Show');
    })->name('movie.show');
});

Route::prefix('user/dashboard')->name('user.dashboard.')->group(function () {
    Route::get('/movie/{movie:slug}', function ($slug) {
        return Inertia::render('Prototype/MovieDetail', [
            'movie' => $slug
        ]);
    })->name('movie.show');
    
    Route::get('/subscription', function () {
        return Inertia::render('Prototype/SubscriptionPlan');
    })->name('subscription');
});

Route::middleware('auth')->group(function () {
    Route::post('logout', [AuthenticatedSessionController::class, 'destroy'])->name('logout');
});

require __DIR__.'/auth.php';
