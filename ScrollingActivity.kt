package com.example.turtletracker

import com.google.android.material.appbar.CollapsingToolbarLayout

class ScrollingActivity : AppCompatActivity() {
    private var binding: ActivityScrollingBinding? = null
    protected fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        binding = ActivityScrollingBinding.inflate(getLayoutInflater())
        setContentView(binding.getRoot())
        val toolbar: Toolbar = binding.toolbar
        setSupportActionBar(toolbar)
        val toolBarLayout: CollapsingToolbarLayout = binding.toolbarLayout
        toolBarLayout.setTitle(getTitle())
        val fab: FloatingActionButton = binding.fab
        fab.setOnClickListener(object : View.OnClickListener {
            override fun onClick(view: View) {
                Snackbar.make(view, "Replace with your own action", Snackbar.LENGTH_LONG)
                        .setAction("Action", null).show()
            }
        })
    }
}