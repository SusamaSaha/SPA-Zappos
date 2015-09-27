

function showDetails(el)
{
var about = new Array("My Name is Susama Saha.I am a junior at University of North Carolina at Charlotte. I am working toward my BS in Computer Science with a minor in Business.<br><br> I have worked for several years before I decided to pursue my Bachelors degree. In my past employments I have developed websites, designed graphics and product catalogs. I also had opportunity to do a bit of technical writing where worked on user manuals for software.<br><br>  I always found the client interaction with a web app very appealing. I enjoy building simple website to interactive web applications.<p>For this web page I used <strong>HTML5 and CSS3</strong> for designing purposes. <strong>Javascript</strong> is used to load the content dynamically.</p> ");
var resume = new Array ("<b>EDUCATION:<br>   University of North Carolina at Charlotte</b><p>BS in Computer Science with major concentration in Computing Systems and a minor in Business.<ul><li>Expected Graduation in 2016.</li><li>Current GPA- 3.7/4</li></ul></p><p><b>Womens Polytechnic, Berhampur, India.</b><ul><li>Diploma in Computer Science and Engineering.</li><li>Graduated 2001.</li></ul></p><p><b>SKILLS and ABILITIES</b><ul><li>Programming languages and scripting including Java, Ruby on Rails, C, SQL, HTML, CSS and JavaScript.</li><li>Familiar with GitHub</li><li>GUI Front end tools: Dream weaver, Photoshop, Flash, Illustrator, Page Maker, Adobe Acrobat, and Microsoft Office.</li></ul></p>");
var contact = new Array("<b>Contact Me:<p>Name:</b>            Susama Saha<br><b>Email:</b>            susama.saha@gmail.com<br><b>Phone:</b>            201.982.4977");
    
    if (el=="about")
        {
            document.getElementById("content").innerHTML = about[0];
        }
    else if(el=="portfolio")
        {
            document.getElementById("content").innerHTML = resume[0]+"<p><b>EXPERIENCES:<br>Product Designer<br>    C & A Marketing, Inc., New Jersey      Mar 2009 - Jan 2010</b><ul></li>Developed and maintained the Company website www.camarketing.com.</li><li>Responsible for Graphics and content management of the website.</li><li>Designed Catalogs, Banners, and Product graphics for marketing online and in store.</li></ul></p><p><b>Technical Assistant<br>Zentech Offshore & Marine Engineering. Pvt. Ltd.    Jan 2002 to Nov 2006</b><br><ul><li>Developed and maintained the company websites www.zentechusa.com</li><li>Preparation of User manual and additional user interfaces on PDF, and print media to support Microsoft Windows platform computer users.</li><li>Hydrostatic table preparation, tank table preparation, chart preparation,</li><li>Report formatting</li></ul></p>";
        }
    else if(el=="contact")
        {
            document.getElementById("content").innerHTML = contact[0];
        }
        
        
    }



