package com.example.turtletracker

import androidx.fragment.app.Fragment

class FirstFragment : Fragment() {
    private var binding: FragmentFirstBinding? = null
    fun onCreateView(
            inflater: LayoutInflater?, container: ViewGroup?,
            savedInstanceState: Bundle?
    ): View {
        binding = FragmentFirstBinding.inflate(inflater, container, false)
        return binding.getRoot()
    }

    fun onViewCreated(@NonNull view: View?, savedInstanceState: Bundle?) {
        super.onViewCreated(view, savedInstanceState)
        binding.buttonFirst.setOnClickListener(object : View.OnClickListener {
            override fun onClick(view: View) {
                NavHostFragment.findNavController(this@FirstFragment)
                        .navigate(R.id.action_FirstFragment_to_SecondFragment)
            }
        })
    }

    fun onDestroyView() {
        super.onDestroyView()
        binding = null
    }
}