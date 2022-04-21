<template>
    <div class="blog-section pt-100 pb-100">
        <div class="container">
            <div class="row">
                <div class="col-lg-8 col-md-12">
                    <div class="blog-details-desc">
                        <div class="article-image">
                            <img :src="details[0].img.url" alt="image">
                        </div>
                        <div class="article-content">
                            <div class="entry-meta">
                                <ul>
                                    <li>
                                        <span>Posted On:</span> 
                                        <NuxtLink to="/">{{details[0].date}}</NuxtLink>
                                    </li>
                                    <li>
                                        <span>Posted By:</span> 
                                        <NuxtLink to="/">{{details[0].name}}</NuxtLink>
                                    </li>
                                </ul>
                            </div>

                            <h3>{{details[0].title}}</h3>
                            <span v-html="details[0].longText"></span>
                        </div>

                        <div class="article-footer">
                            <div class="article-tags">
                                <span>
                                    <i class="bx bx-bookmark"></i>
                                </span>
                                <NuxtLink 
                                    v-for="tag in details[0].tags"
                                    :key="tag.id"
                                    :to="tag.link"
                                >
                                    {{tag.tag}} {{','}}
                                </NuxtLink>
                            </div>

                            <div class="article-share">
                                <ul class="social">
                                    <li><span>Share:</span></li>
                                    <li>
                                        <a href="#" target="_blank">
                                            <i class="flaticon-facebook"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" target="_blank">
                                            <i class="flaticon-twitter"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" target="_blank">
                                            <i class="flaticon-instagram"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div class="post-navigation">
                            <div class="navigation-links">
                                <div class="nav-previous">
                                    <NuxtLink to="/">
                                        <i class="flaticon-left"></i> 
                                        Prev Post
                                    </NuxtLink>
                                </div>
                                <div class="nav-next">
                                    <NuxtLink to="/">
                                        Next Post 
                                        <i class="flaticon-right"></i>
                                    </NuxtLink>
                                </div>
                            </div>
                        </div>

                        <div class="comments-area">
                            <h3 class="comments-title">4 Comments:</h3>
                            <ol class="comment-list">
                                <li class="comment">
                                    <article class="comment-body">
                                        <footer class="comment-meta">
                                            <div class="comment-author vcard">
                                                <img src="~/assets/images/clients/client-1.jpg" class="avatar" alt="image">
                                                <b class="fn">John Jones</b>
                                                <span class="says">says:</span>
                                            </div>
                                            <div class="comment-metadata">
                                                <NuxtLink to="/">
                                                    <time>April 24, 2021 at 10:59 am</time>
                                                </NuxtLink>
                                            </div>
                                        </footer>
                                        <div class="comment-content">
                                            <p>Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen.</p>
                                        </div>
                                        <div class="reply">
                                            <a href="#" class="comment-reply-link">Reply</a>
                                        </div>
                                    </article>

                                    <ol class="children">
                                        <li class="comment">
                                            <article class="comment-body">
                                                <footer class="comment-meta">
                                                    <div class="comment-author vcard">
                                                        <img src="~/assets/images/clients/client-2.jpg" class="avatar" alt="image">
                                                        <b class="fn">Steven Smith</b>
                                                        <span class="says">says:</span>
                                                    </div>
                                                    <div class="comment-metadata">
                                                        <NuxtLink to="/">
                                                            <time>April 24, 2021 at 10:59 am</time>
                                                        </NuxtLink>
                                                    </div>
                                                </footer>
                                                <div class="comment-content">
                                                    <p>Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen.</p>
                                                </div>
                                                <div class="reply">
                                                    <a href="#" class="comment-reply-link">Reply</a>
                                                </div>
                                            </article>
                                        </li>

                                        <ol class="children">
                                            <li class="comment">
                                                <article class="comment-body">
                                                    <footer class="comment-meta">
                                                        <div class="comment-author vcard">
                                                            <img src="~/assets/images/clients/client-3.jpg" class="avatar" alt="image">
                                                            <b class="fn">Sarah Taylor</b>
                                                            <span class="says">says:</span>
                                                        </div>
                                                        <div class="comment-metadata">
                                                            <NuxtLink to="/">
                                                                <time>April 24, 2021 at 10:59 am</time>
                                                            </NuxtLink>
                                                        </div>
                                                    </footer>
                                                    <div class="comment-content">
                                                        <p>Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen.</p>
                                                    </div>
                                                    <div class="reply">
                                                        <a href="#" class="comment-reply-link">Reply</a>
                                                    </div>
                                                </article>
                                            </li>
                                        </ol>
                                    </ol>
                                </li>

                                <li class="comment">
                                    <article class="comment-body">
                                        <footer class="comment-meta">
                                            <div class="comment-author vcard">
                                                <img src="~/assets/images/clients/client-4.jpg" class="avatar" alt="image">
                                                <b class="fn">James Anderson</b>
                                                <span class="says">says:</span>
                                            </div>
                                            <div class="comment-metadata">
                                                <NuxtLink to="/">
                                                    <time>April 24, 2021 at 10:59 am</time>
                                                </NuxtLink>
                                            </div>
                                        </footer>
                                        <div class="comment-content">
                                            <p>Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen.</p>
                                        </div>
                                        <div class="reply">
                                            <a href="#" class="comment-reply-link">Reply</a>
                                        </div>
                                    </article>
                                </li>
                            </ol>

                            <div class="comment-respond">
                                <h3 class="comment-reply-title">Leave a Reply</h3>
                                <form class="comment-form">
                                    <p class="comment-notes">
                                        <span id="email-notes">Your email address will not be published.</span>
                                        Required fields are marked 
                                        <span class="required">*</span>
                                    </p>
                                    <p class="comment-form-comment">
                                        <label>Comment</label>
                                        <textarea name="comment" id="comment" cols="45" rows="5" maxlength="65525" required="required"></textarea>
                                    </p>
                                    <p class="comment-form-author">
                                        <label>Name <span class="required">*</span></label>
                                        <input type="text" id="author" name="author" required="required">
                                    </p>
                                    <p class="comment-form-email">
                                        <label>Email <span class="required">*</span></label>
                                        <input type="email" id="email" name="email" required="required">
                                    </p>
                                    <p class="comment-form-url">
                                        <label>Website</label>
                                        <input type="url" id="url" name="url">
                                    </p>
                                    <p class="comment-form-cookies-consent">
                                        <input type="checkbox" value="yes" name="wp-comment-cookies-consent" id="wp-comment-cookies-consent">
                                        <label for="wp-comment-cookies-consent">Save my name, email, and website in this browser for the next time I comment.</label>
                                    </p>
                                    <p class="form-submit">
                                        <input type="submit" name="submit" id="submit" class="submit" value="Post A Comment">
                                    </p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="col-lg-4 col-md-12">
                    <Sidebar />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Sidebar from '../Common/Sidebar'

export default {
    name: 'SingleBlog',
    components: { 
        Sidebar
    },
    props: ['detailsContent'],

    data: function () {
        return {
            details: this.detailsContent
        }
    }
}
</script>