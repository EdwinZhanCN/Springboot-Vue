import{_ as s,o,c as n,Q as a}from"./chunks/framework.7ed72bc6.js";const q=JSON.parse('{"title":"Setup Nginx","description":"","frontmatter":{},"headers":[],"relativePath":"Nginx-Setup.md","filePath":"Nginx-Setup.md"}'),p={name:"Nginx-Setup.md"},l=a(`<h1 id="setup-nginx" tabindex="-1">Setup Nginx <a class="header-anchor" href="#setup-nginx" aria-label="Permalink to &quot;Setup Nginx&quot;">​</a></h1><p><a href="https://nginx.org/en/" target="_blank" rel="noreferrer">Nginx(engine-x)</a> is a popular open-source software used for web serving, reverse proxying, caching, load balancing, media streaming, and more.</p><p>In this article, we will continue our journey to the personal website.</p><h2 id="get-start-with-linux-system" tabindex="-1">Get start with Linux system <a class="header-anchor" href="#get-start-with-linux-system" aria-label="Permalink to &quot;Get start with Linux system&quot;">​</a></h2><p>On this system, we don&#39;t have any <strong>GUI</strong> (Graphic User Interface), we only use codes and commands to do anything.</p><p>Go to <strong>Terminal</strong>, change your identity into root user by use command:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">sudo</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-i</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">sudo</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-i</span></span></code></pre></div><p>Then your username will change to <strong>root</strong>@hostname</p><p>Use following command to update your software-package-list, we do this before we install anything.</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">sudo</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">apt</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">update</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">sudo</span><span style="color:#24292E;"> </span><span style="color:#032F62;">apt</span><span style="color:#24292E;"> </span><span style="color:#032F62;">update</span></span></code></pre></div><p>Then, intall Nginx</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">sudo</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">apt</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">install</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">nginx</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">sudo</span><span style="color:#24292E;"> </span><span style="color:#032F62;">apt</span><span style="color:#24292E;"> </span><span style="color:#032F62;">install</span><span style="color:#24292E;"> </span><span style="color:#032F62;">nginx</span></span></code></pre></div><p>And then, start Nginx service</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">sudo</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">systemctl</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">start</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">nginx</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">sudo</span><span style="color:#24292E;"> </span><span style="color:#032F62;">systemctl</span><span style="color:#24292E;"> </span><span style="color:#032F62;">start</span><span style="color:#24292E;"> </span><span style="color:#032F62;">nginx</span></span></code></pre></div><p>Check the status of Nginx service</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">sudo</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">systemctl</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">status</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">nginx</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">sudo</span><span style="color:#24292E;"> </span><span style="color:#032F62;">systemctl</span><span style="color:#24292E;"> </span><span style="color:#032F62;">status</span><span style="color:#24292E;"> </span><span style="color:#032F62;">nginx</span></span></code></pre></div><p>If you get this information, which means your Nginx service start successfully:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">●</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">nginx.service</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">-</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">A</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">high</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">performance</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">web</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">server</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">and</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">a</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">reverse</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">proxy</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">server</span></span>
<span class="line"><span style="color:#E1E4E8;">     </span><span style="color:#B392F0;">Loaded:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">loaded</span><span style="color:#E1E4E8;"> (/lib/systemd/system/nginx.service; </span><span style="color:#B392F0;">enabled</span><span style="color:#E1E4E8;">; </span><span style="color:#B392F0;">vendor</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">preset:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">enabled</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">     </span><span style="color:#B392F0;">Active:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">active</span><span style="color:#E1E4E8;"> (running) since Mon 2023-10-16 19:09:25 EDT; </span><span style="color:#B392F0;">3h</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">2</span><span style="color:#9ECBFF;">min</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">ago</span></span>
<span class="line"><span style="color:#E1E4E8;">       </span><span style="color:#B392F0;">Docs:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">man:nginx</span><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">8</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#B392F0;">Main</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">PID:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1112</span><span style="color:#E1E4E8;"> (nginx)</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">Tasks:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;"> (limit: </span><span style="color:#79B8FF;">2185</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">     </span><span style="color:#B392F0;">Memory:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">5.4</span><span style="color:#9ECBFF;">M</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">CPU:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">21</span><span style="color:#9ECBFF;">ms</span></span>
<span class="line"><span style="color:#E1E4E8;">     </span><span style="color:#B392F0;">CGroup:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">/system.slice/nginx.service</span></span>
<span class="line"><span style="color:#E1E4E8;">             </span><span style="color:#B392F0;">├─1112</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;nginx: master process /usr/sbin/nginx -g daemon on; master_process on;&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">             </span><span style="color:#B392F0;">├─1114</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;nginx: worker process&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">             </span><span style="color:#B392F0;">└─1115</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;nginx: worker process&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">Oct</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">16</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">19</span><span style="color:#9ECBFF;">:09:25</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">ubuntu-linux-22-04-02-desktop</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">systemd[</span><span style="color:#79B8FF;">1</span><span style="color:#9ECBFF;">]:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">Starting</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">A</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">high</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">performance</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">web</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">server</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">and</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">a</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">reverse</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">proxy</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">server...</span></span>
<span class="line"><span style="color:#B392F0;">Oct</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">16</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">19</span><span style="color:#9ECBFF;">:09:25</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">ubuntu-linux-22-04-02-desktop</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">systemd[</span><span style="color:#79B8FF;">1</span><span style="color:#9ECBFF;">]:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">Started</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">A</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">high</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">performance</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">web</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">server</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">and</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">a</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">reverse</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">proxy</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">server.</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">●</span><span style="color:#24292E;"> </span><span style="color:#032F62;">nginx.service</span><span style="color:#24292E;"> </span><span style="color:#032F62;">-</span><span style="color:#24292E;"> </span><span style="color:#032F62;">A</span><span style="color:#24292E;"> </span><span style="color:#032F62;">high</span><span style="color:#24292E;"> </span><span style="color:#032F62;">performance</span><span style="color:#24292E;"> </span><span style="color:#032F62;">web</span><span style="color:#24292E;"> </span><span style="color:#032F62;">server</span><span style="color:#24292E;"> </span><span style="color:#032F62;">and</span><span style="color:#24292E;"> </span><span style="color:#032F62;">a</span><span style="color:#24292E;"> </span><span style="color:#032F62;">reverse</span><span style="color:#24292E;"> </span><span style="color:#032F62;">proxy</span><span style="color:#24292E;"> </span><span style="color:#032F62;">server</span></span>
<span class="line"><span style="color:#24292E;">     </span><span style="color:#6F42C1;">Loaded:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">loaded</span><span style="color:#24292E;"> (/lib/systemd/system/nginx.service; </span><span style="color:#6F42C1;">enabled</span><span style="color:#24292E;">; </span><span style="color:#6F42C1;">vendor</span><span style="color:#24292E;"> </span><span style="color:#032F62;">preset:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">enabled</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">     </span><span style="color:#6F42C1;">Active:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">active</span><span style="color:#24292E;"> (running) since Mon 2023-10-16 19:09:25 EDT; </span><span style="color:#6F42C1;">3h</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">2</span><span style="color:#032F62;">min</span><span style="color:#24292E;"> </span><span style="color:#032F62;">ago</span></span>
<span class="line"><span style="color:#24292E;">       </span><span style="color:#6F42C1;">Docs:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">man:nginx</span><span style="color:#24292E;">(</span><span style="color:#6F42C1;">8</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">   </span><span style="color:#6F42C1;">Main</span><span style="color:#24292E;"> </span><span style="color:#032F62;">PID:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1112</span><span style="color:#24292E;"> (nginx)</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">Tasks:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">3</span><span style="color:#24292E;"> (limit: </span><span style="color:#005CC5;">2185</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">     </span><span style="color:#6F42C1;">Memory:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">5.4</span><span style="color:#032F62;">M</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">CPU:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">21</span><span style="color:#032F62;">ms</span></span>
<span class="line"><span style="color:#24292E;">     </span><span style="color:#6F42C1;">CGroup:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">/system.slice/nginx.service</span></span>
<span class="line"><span style="color:#24292E;">             </span><span style="color:#6F42C1;">├─1112</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;nginx: master process /usr/sbin/nginx -g daemon on; master_process on;&quot;</span></span>
<span class="line"><span style="color:#24292E;">             </span><span style="color:#6F42C1;">├─1114</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;nginx: worker process&quot;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;&quot;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;&quot;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;&quot;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;&quot;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;&quot;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;&quot;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;&quot;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;&quot;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;&quot;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;&quot;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;&quot;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;&quot;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;&quot;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;&quot;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;&quot;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;&quot;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;&quot;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;&quot;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;&quot;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;&quot;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;&quot;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;&quot;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;&quot;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;&quot;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;&quot;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;&quot;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;&quot;</span></span>
<span class="line"><span style="color:#24292E;">             </span><span style="color:#6F42C1;">└─1115</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;nginx: worker process&quot;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;&quot;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;&quot;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;&quot;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;&quot;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;&quot;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;&quot;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;&quot;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;&quot;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;&quot;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;&quot;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;&quot;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;&quot;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;&quot;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;&quot;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;&quot;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;&quot;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;&quot;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;&quot;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;&quot;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;&quot;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;&quot;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;&quot;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;&quot;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;&quot;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;&quot;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;&quot;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">Oct</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">16</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">19</span><span style="color:#032F62;">:09:25</span><span style="color:#24292E;"> </span><span style="color:#032F62;">ubuntu-linux-22-04-02-desktop</span><span style="color:#24292E;"> </span><span style="color:#032F62;">systemd[</span><span style="color:#005CC5;">1</span><span style="color:#032F62;">]:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">Starting</span><span style="color:#24292E;"> </span><span style="color:#032F62;">A</span><span style="color:#24292E;"> </span><span style="color:#032F62;">high</span><span style="color:#24292E;"> </span><span style="color:#032F62;">performance</span><span style="color:#24292E;"> </span><span style="color:#032F62;">web</span><span style="color:#24292E;"> </span><span style="color:#032F62;">server</span><span style="color:#24292E;"> </span><span style="color:#032F62;">and</span><span style="color:#24292E;"> </span><span style="color:#032F62;">a</span><span style="color:#24292E;"> </span><span style="color:#032F62;">reverse</span><span style="color:#24292E;"> </span><span style="color:#032F62;">proxy</span><span style="color:#24292E;"> </span><span style="color:#032F62;">server...</span></span>
<span class="line"><span style="color:#6F42C1;">Oct</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">16</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">19</span><span style="color:#032F62;">:09:25</span><span style="color:#24292E;"> </span><span style="color:#032F62;">ubuntu-linux-22-04-02-desktop</span><span style="color:#24292E;"> </span><span style="color:#032F62;">systemd[</span><span style="color:#005CC5;">1</span><span style="color:#032F62;">]:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">Started</span><span style="color:#24292E;"> </span><span style="color:#032F62;">A</span><span style="color:#24292E;"> </span><span style="color:#032F62;">high</span><span style="color:#24292E;"> </span><span style="color:#032F62;">performance</span><span style="color:#24292E;"> </span><span style="color:#032F62;">web</span><span style="color:#24292E;"> </span><span style="color:#032F62;">server</span><span style="color:#24292E;"> </span><span style="color:#032F62;">and</span><span style="color:#24292E;"> </span><span style="color:#032F62;">a</span><span style="color:#24292E;"> </span><span style="color:#032F62;">reverse</span><span style="color:#24292E;"> </span><span style="color:#032F62;">proxy</span><span style="color:#24292E;"> </span><span style="color:#032F62;">server.</span></span></code></pre></div><p><strong>Well Down!</strong> We will set our domain name in next article</p>`,19),t=[l];function e(r,c,E,y,F,u){return o(),n("div",null,t)}const C=s(p,[["render",e]]);export{q as __pageData,C as default};
