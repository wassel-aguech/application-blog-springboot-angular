package com.example.mysqlconfig.repository;


import com.example.mysqlconfig.model.Blog;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface BlogRepo extends JpaRepository <Blog, Long> {


    Optional <Blog> findBlogById(long id);

}
