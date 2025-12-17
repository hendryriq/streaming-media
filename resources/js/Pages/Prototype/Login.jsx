import TextInput from "@/Components/TextInput";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import { Head, Link } from "@inertiajs/react";

export default function Login(){
    return <div class="mx-auto max-w-screen min-h-screen bg-black text-white md:px-10 px-3">
    <div class="fixed top-[-50px] hidden lg:block">
        <img src="/images/signup-image.png"
            class="hidden laptopLg:block laptopLg:max-w-[450px] laptopXl:max-w-[640px]" alt=""/>
    </div>
    <div class="py-24 flex laptopLg:ml-[680px] laptopXl:ml-[870px]">
        <div>
            <img src="/images/moonton-white.svg" alt=""/>
            <div class="my-[70px]">
                <div class="font-semibold text-[26px] mb-3">
                    Welcome Back
                </div>
                <p class="text-base text-[#767676] leading-7">
                    Explore our new movies and get <br/>
                    the better insight for your life
                </p>
            </div>
            <form class="w-[370px]">
                <div class="flex flex-col gap-6">
                    <div>
                        <label class="text-base block mb-2">Email Address</label>
                        <label 
                                forInput="email"
                                value="EmailAddress"
                        />
                        <TextInput
                            type="email"
                            name="email"
                            placeholder="Email Address" 
                        />
                            
                    </div>
                        <div>
                            <label 
                                forInput="password"
                                value="Password"
                            />
                            <TextInput
                                type="password"
                                name="password"
                                placeholder="Password"
                            />
                        </div>
                </div>
                    <div className="grid space-y-[14px] mt-[30px]">
                        <Link href={route("prototype.dashboard")}>
                            <PrimaryButton>
                                <span className="text-base font-semibold">
                                    Start Watching
                                </span>
                            </PrimaryButton>
                        </Link>
                        <Link href={route("prototype.register")}>
                            <PrimaryButton
                                type="button"
                                variant="light-outline"
                            >
                                <span className="text-base text-white">
                                    Create New Account
                                </span>
                            </PrimaryButton>
                        </Link>
                    </div>
            </form>
        </div>
    </div>
</div>
}