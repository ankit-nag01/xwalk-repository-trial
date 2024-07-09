export default function decorate(block){
function getHeaderSection(){
 const[
  titleEl,
  linkItemEl,
 ] = block.children;

 const title = titleEl?.textContent?.trim() || "";
 const linkItems = linkItemEl?.textContent?.trim() || "";

 return {
  title,
  linkItems,
 };

}
console.log("my value id",linkItems);

const headerBar = getHeaderSection(block);
// const menuItem = [];
const headerHtml = `<div class="header-parent">
      <div class="header-logo">
        <a href="#">${headerBar.title}</a>
      </div>
      <div class="header-list">
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Contact</a></li>
        <li><a href="#">Feedback</a></li>
      </ul>
    </div>
</div>`;

block.innerHTML = headerHtml;

}