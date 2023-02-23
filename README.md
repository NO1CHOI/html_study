<h1>반응형 웹디자인&웹퍼블리셔 양성과정 버전기록</h1>
<p>ex)날짜-제목-요약</p>
<h2>23.02.13 시작 - HTML</h2>
<p>H1~H6 , P , br , inling, block</p>
<p>h1~h3은 검색키워드로 활용 가능하다. h4~h6 꼭 필요한 경우만 사용하거나 권장하지않음</p>
<p> block과 inline 태그는 의미에 맞게 외부/내부 구조로 구성해서 사용해야 한다.(의미 중첩되지 않도록)</p>
<hr>
<h2>23.02.14 -html -문서 태그+내비게이션 개념</h2>
<p>&lt;strong&gt;&lt;em&gt;&lt;sub&gt;&lt;sup&gt;&lt;del&gt;&lt;blockquote&gt;&lt;q&gt;&lt;code&gt;&lt;address&gt;&lt;hr&gt;</p>
<p>gnb , lnb , snb , fnb ,  Breadcrumbs</p>
<blockquote cite="https://webty.tistory.com/85"> 유나쌤 블로그 참고= https://webty.tistory.com/85 </blockquote>
<hr>
<h2>23.02.15 - HTML - 순차/비순차,정의형 목록 비교</h2>
<p>ol,ul,li</p>
<h3><em>ol,ul 사용법</em></h3>
<p>OL 이란?</p>
<ol>
<li>ol은 순서가 있는 목록의 틀이다.</li>
<li>li의 <strong>부모는 ol,ul만</strong> 가능하다.</li>
</ol>
<p>UL 이란?</p>
<ul>
<li>ul,ol,li 순서있는 목록 없는 목록 구분 호가실히 해야한.</li>
<li>li의 <strong>형제 태그</strong>는 li만 올 수 있으니 나머지 태그는 그 자식,자손 태그에 삽입 해야한다.</li>
</ul>
<p><em>dl,dt,dd 사용법</em></p>
<dl>
<h2>&lt;dl&gt;&lt;h2&gt;단어·숙어&lt;h2&gt;&lt;dl&gt;</h2>
<dt>&lt;dt&gt;web>&lt;dt&gt;</dt>
<dd>&lt;dd&gt;1.<em>명사</em> (=spider's web)&lt;/dd&gt;</dd>
<dd>2.<em>명사</em> (복잡하게 연결된)=망[거미줄]</dd>
</dl>
<hr>
<div class="study">
  <h2>23.02.16-HTML-시맨틱태크.그릅태그</h2>
  <dl>
    <dt class=skip">Sementic 태그</dt>
    <dd>&lt;header&gt;</dd>
    <dd>&ltnav&gt;</dd>
    <dd>&ltaside&gt;</dd>
    <dd>&ltsection&gt;</dd>
    <dd>&ltfooter&gt;</dd>
    <dd>&ltarticle&gt;</dd>
    <dd>&ltfigure&gt;</dd>
    <dd>&ltdetails&gt;</dd>
    <dd>&ltmain&gt;</dd>
  </dl>
</div>
<hr>
                   <h2>23-02-17-HTML:img,video,a href,하이퍼링크</h2>
                   <p>절대경로란? / 상대경로란?</p>
                   <p>이미지,비디오 태그 넣기</p>
                   <hr>
                   <h2>23-02-18 ~ 23-02-19 복습</h2>
                   <p>0213~0217 배웠던거 복습</p>
                   <hr>
<h2>23-02-20-Html:Table</h2>
<table>
<thead>
<tr>
<th>구분</th>
<th>태그명</th>
<th>의미</th>
</tr>
</thead>
<tbody>
<tr>
<td rowspan="3">block</td>
<td>&lt;tr&gt;</td>
<td>가로형 태그</td>
</tr>
<tr>
<td>&lt;td&gt;</td>
<td>내용(열)태그</td>
</tr>
<tr>
<td>&lt;th&gt;</td>
<td>제목(열)태그</td>
</tr>
</tbody>
</table>
<hr>
<h2>23-02-21-Html:form</h2>
<form action="#" method="get">
<fieldset>
<legend>form 퀴즈</legend>
<span> 1.다음 중 label for 와 연관된 input 속성은?</span><br>
<label><input type="radio" name="quiz" value="id">1.id</label><br>
<label><input type="radio" name="quiz" value="class">2.class</label><br>
<label><input type="radio" name="quiz" value="name">3.name</label><br>
<span>2.form에서 이 [ ] 를 넣으면 수정이 불가능하다 무엇인가?<br>
<label><input type="radio" name="quiz" value="readonly">1.readonly</label><br>
<label><input type="radio" name="quiz" value="autofocus">2.autofocus</label><br>
<label><input type="radio" name="quiz" value="maxlength">3.maxlength</label><br>
</fiedset>
</form>
<h2>23-02-22-Html:cloncoding</h2>
<div class="login">
                    <p><button type="submit">로그인</button></p>
                </div>
<hr>
<h2><23-02-23:Html /CSS</h2>
<p>reset css 코드</p><br>
<p>html,body,h1,h2,h3,h4,h5,h6,
p,ul,ol,li,blockquote,dl,dt,dd,address,video,
strong,em,del,s,sup,sub,code,q,code,img,a,
table,tr,th,td,thead,tbody,tfoot,
form,fieldset,legend,input,label,textarea,option,section,button,
header,main,footer,article,section,aside,nav,figure,figcaption,div,span<br>
    {<br>
    margin:0; padding:0; <br>
    font-size:1.0rem;<br>
    font-weight:normal;<br>
    font-style:normal;<br>
    line-height:1.0;<br>
    list-style:none;<br>
    }<br>
a {text-decoration: none; color: #000;}
table,tr,th,td {border-collapse:collapse;}
button {cursor:pointer; border:none; background:none;}</p>
<p>css 주석<br> 1.HTML태그 꾸미는 대상 확인 <br>2.위 태그가 가족관계에 속해있는지 확인</p>





