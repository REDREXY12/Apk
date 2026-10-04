export type Product = {id:string;name:string;category:string;price:number;description:string;featured?:boolean};
export const products:Product[] = [
 {id:"server-01",name:"Minecraft Premade Server",category:"Servers",price:29.99,description:"A ready-to-configure Minecraft server package.",featured:true},
 {id:"plugin-01",name:"Premium Essentials Plugin",category:"Plugins",price:9.99,description:"Useful commands and server utilities.",featured:true},
 {id:"mod-01",name:"Metropole Adventure Mods",category:"Mods",price:14.99,description:"A curated gameplay mod collection."},
 {id:"pack-01",name:"Metropole Resource Pack",category:"Resource Packs",price:7.99,description:"A polished resource pack for your server."},
 {id:"bot-01",name:"Discord Bot Pro",category:"Discord Bots",price:19.99,description:"Moderation, tickets and server utilities."},
 {id:"web-01",name:"Minecraft Website",category:"Websites",price:49.99,description:"A responsive website for your Minecraft community."},
 {id:"setup-01",name:"Minecraft Server Setup",category:"Server Setup",price:39.99,description:"Professional server setup and configuration."},
 {id:"dev-01",name:"Custom Development",category:"Custom Development",price:79.99,description:"Custom development for Minecraft and web projects."},
 {id:"hosting-01",name:"Hosting",category:"Hosting",price:0,description:"Hosting is coming soon.",featured:true}
];