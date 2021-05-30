


function makeNode(ch)
{
this.ch=ch;
this.isTerminal=false;
this.mapping={};
this.words=[];
}
const add=(str,i,root)=>{
//  console.log('working!')
    // console.log(str);
   if(i===str.length)
   {
       root.isTerminal=true;
       return;
   }

   if(!root.mapping[str[i]])
   root.mapping[str[i]]=new makeNode(str[i]);

   root.words.push(str);

   add(str,i+1,root.mapping[str[i]]);
}

const search=(str,i,root)=>{
    const ch=str[i];
   
    if(i===str.length)
    {
       return root.words;
    }
    if(!root.mapping[str[i]])
    {
       console.log('mapping of '+str[i]+' is '+root.mapping[str[i]]) ;
        return [];
    }
    return search(str,i+1,root.mapping[ch])

}
export {search,add,makeNode};