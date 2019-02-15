var shell = require('shelljs');
const { exec } = require('child_process');

if (!shell.which('git')) {
    shell.echo('Sorry, this script requires git');
    shell.exit(1);
}

repo = 'f:\\projects\\reporting-sql\\';
//cmd = 'git log --pretty=format:\'{  \"commit\": \"%H\",%n  \"author\": \"%aN <%aE>\",%n  \"date\": \"%ai\",%n  \"message\": \"%f\"%n},\' ';
//cmd = 'git log --pretty="{%n  \\"commit\\": \\"%H\\",%n \\"author\\": \\"%aN %aE\\",%n \\"date\\": \\"%ai\\",%n  \\"message\\": \\"%f\\"%n }, "';
cmd = 'git log --pretty="{\\"commit\\": \\"%H\\", \\"author\\": \\"%aN %aE\\", \\"date\\": \\"%ai\\",  \\"message\\": \\"%f\\" }"';


shell.cd(repo);

//var arr= shell.exec(cmd);

var arr = exec(cmd, (err,stdout,stderr) => 
{ 
    if (err) {return }; 
    
    arr = stdout.split('\n');
    
    arr.forEach(element => {
        console.log(element);
    });
  
});
//console.log(arr);