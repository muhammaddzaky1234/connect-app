import { IconLogout2, IconUser, IconUserBolt, IconUserCog } from "@tabler/icons-react";

export default function UserPages() {
    return (
        <div id="container" className="flex h-[100vh] text-black">
           <section id="navigation" className="w-[250px] bg-white border-r border-[#ccc] px-10 py-5">
           <h1 className="text-2xl font-bold mb-8 text-center">Connect</h1>
           <div className="flex flex-col gap-3 mt-4">
            <button className="my-[15px] flex items-center gap-[10px] cursor-pointer"> <IconUser />  Users</button>
            <button className="my-[15px] flex items-center gap-[10px] cursor-pointer"> <IconUserCog /> Hak akses</button>
            <button className="my-[15px] flex items-center gap-[10px] cursor-pointer"> <IconLogout2 /> Logout</button>
           </div>
           </section>
           <section id = "content" className="flex-1 p-8 bg-white overflow-y-auto">
            <input type="search" placeholder="Cari User" className="w-full p-2.5 border border-gray-400 rounded mb-5"></input>
            <div className="flex flex-col gap-4 user-list">
                <div className="border border-black rounded-lg p-2 flex justify-between items-center user-card">
                    <div className="user-info">
                        <h2 className="text-base font-bold mb-1.5">Rahmat Saudi Al Fathir As</h2>
                        <p className="text-sm mb-1">rahmatsaudi@universitasmulia.ac.id</p>
                        <span className="inline-block bg-black text-white text-xs px-2 py-0.5 rounded mr-1.5">Admin</span>
                        <span className="inline-block bg-black text-white text-xs px-2 py-0.5 rounded mr-1.5">Employee</span>
                    </div>
                    <span className="font-bold text-black">Aktif</span>
                </div>

                <div className="border border-black rounded-lg p-2 flex justify-between items-center user-card">
                    <div className="user-info">
                        <h2 className="text-base font-bold mb-1.5">Lintang</h2>
                        <p className="text-sm mb-1">lintang@universitasmulia.ac.id</p>
                        <span className="inline-block bg-black text-white text-xs px-2 py-0.5 rounded mr-1.5">Employee</span>
                    </div>
                    <span className="font-bold text-black">Aktif</span>
                </div>

                <div className="border border-black rounded-lg p-2 flex justify-between items-center user-card">
                    <div className="user-info">
                        <h2 className="text-base font-bold mb-1.5">Shafira</h2>
                        <p className="text-sm mb-1">shafira@universitasmulia.ac.id</p>
                        <span className="inline-block bg-black text-white text-xs px-2 py-0.5 rounded mr-1.5">Employee</span>
                    </div>
                    <span className="font-bold text-black">Aktif</span>
                </div>

                <div className="border border-black rounded-lg p-2 flex justify-between items-center user-card">
                    <div className="user-info">
                        <h2 className="text-base font-bold mb-1.5">Lebah Ganteng</h2>
                        <p className="text-sm mb-1">lebahganteng@universitasmulia.ac.id</p>
                        <span className="inline-block bg-black text-white text-xs px-2 py-0.5 rounded mr-1.5">Employee</span>
                    </div>
                    <span className="font-bold text-black">Suspended</span>
                </div>
            </div>
           </section>
           <button className="fixed bottom-5 right-5 text-xl bg-gray-200 border border-gray-400 rounded-lg px-4 py-2 cursor-pointer">+</button>
        </div>
    );
}