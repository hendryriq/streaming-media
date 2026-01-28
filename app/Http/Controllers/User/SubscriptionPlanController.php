<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\SubscriptionPlan;
use App\Models\UserSubscription;

class SubscriptionPlanController extends Controller
{
    private function index(){
        $subscriptionPlan = SubscriptionPlan::all();
        return inertia('User/Dashboard/SubscriptionPlan/index',[
        'subscriptionPlans' => SubscriptionPlan::all(),
    ]);
    }

    private function userSubscribe(Request $request, SubscriptionPlan $subscriptionPlan){
        $data = [
            'user_id' => auth()->user()->id,
            'subscription_plan_id' => $subscriptionPlan->id,
            'active_period_in_months' => $subscriptionPlan->active_period_in_months,
            'price' => $subscriptionPlan->price,
            'payment_status' => 'success',
        ];
        return $data;
    }
}
